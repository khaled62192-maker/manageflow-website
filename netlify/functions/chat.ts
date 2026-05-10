import { Handler } from "@netlify/functions";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are ManageFlow's AI assistant. ManageFlow is a premium, founder-led digital studio based in the UAE, serving GCC brands.

ABOUT MANAGEFLOW:
- Founded by Emirati founders (Hamad, Hamdan, Khaled)
- Premium positioning - we're selective, not for everyone
- No outsourcing - everything is done in-house
- Founder-led execution - clients work directly with founders
- Based in UAE, serving GCC region
- Bilingual (English & Arabic) from the start

SERVICES:
1. Website Systems
   - Foundation: Starting from AED 6,000
   - Growth: Starting from AED 9,500
   - Signature: Custom quote

2. Brand Identity
   - Foundation: Starting from AED 3,500
   - System: Starting from AED 6,500
   - Signature: Custom quote

3. Campaign Creative
   - Launch Essentials: Starting from AED 3,500
   - Campaign System: Starting from AED 6,500
   - Full Launch Direction: Custom quote

4. Social Content & Brand Presence
   - Available for selected ongoing partnerships
   - Custom scoped

PROCESS:
1. Brand Review - understand their business
2. Scoping - define deliverables & timeline in writing
3. Design - every detail considered
4. Refine - polish at agreed checkpoints
5. Launch - bring work to market & support

KEY POINTS:
- We respond within 1 working day
- We work with hospitality, beauty, retail, real estate, and founder-led businesses
- We focus on premium execution, not cheap solutions
- Commercial terms are defined during scoping
- Arabic delivery is standard
- Limited capacity ensures quality

TONE:
Be helpful, professional, premium, and honest. If something is outside our scope, say so directly. Encourage visitors to book a Brand Review or contact us for specific projects.`;

const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  try {
    const { message, conversationHistory } = JSON.parse(event.body || "{}");

    if (!message) {
      return { statusCode: 400, body: JSON.stringify({ error: "Message required" }) };
    }

    // Build conversation history for Claude
    const messages = (conversationHistory || []).map(
      (msg: { role: string; content: string }) => ({
        role: msg.role as "user" | "assistant",
        content: msg.content,
      })
    );

    // Add current user message
    messages.push({
      role: "user" as const,
      content: message,
    });

    const response = await client.messages.create({
      model: "claude-opus-4-1",
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages: messages,
    });

    const assistantMessage =
      response.content[0].type === "text" ? response.content[0].text : "";

    return {
      statusCode: 200,
      body: JSON.stringify({ response: assistantMessage }),
    };
  } catch (error) {
    console.error("Chat error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error" }),
    };
  }
};

export { handler };
