export default async function handler(req, res) {

  const BOT_TOKEN = process.env.BOT_TOKEN;

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "POST only"
    });
  }

  try {

    const update = req.body;

    if (!update.message) {
      return res.status(200).json({
        ok: true
      });
    }

    const chatId = update.message.chat.id;

    const msg = (update.message.text || "")
      .toLowerCase()
      .trim();

    let reply = "I don't understand that.";

    if (msg === "hi")
      reply = "Hello!";

    else if (msg === "/start")
      reply = "welcome to vinay chat bot";

    else if (msg === "hello")
      reply = "Hi there";

    else if (msg === "how are you")
      reply = "I am fine.";

    else if (msg === "bye")
      reply = "Goodbye.";

    await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: reply
        })
      }
    );

    return res.status(200).json({
      success: true
    });

  } catch (err) {

    return res.status(500).json({
      error: err.message
    });

  }
  }
