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
      reply = "welcome to vinay's chat bot";

    else if (msg === "hello")
      reply = "Hi there";

    else if (msg === "how are you")
      reply = "I am fine.";

    else if (msg === "bye")
      reply = "Goodbye.";
    else if (msg === "good morning")
  reply = "Good Morning!";

else if (msg === "good afternoon")
  reply = "Good Afternoon!";

else if (msg === "good evening")
  reply = "Good Evening!";

else if (msg === "good night")
  reply = "Good Night!";

else if (msg === "thanks")
  reply = "You're welcome!";

else if (msg === "thank you")
  reply = "You're welcome!";

else if (msg === "what is your name")
  reply = "My name is Vinay Bot.";

else if (msg === "who made you")
  reply = "Vinay created me.";

else if (msg === "how old are you")
  reply = "I am a bot, I don't have an age.";

else if (msg === "where are you from")
  reply = "I live on the internet.";

else if (msg === "what can you do")
  reply = "I can chat with you.";

else if (msg === "ok")
  reply = "Okay!";

else if (msg === "yes")
  reply = "Great!";

else if (msg === "no")
  reply = "Alright.";

else if (msg === "cool")
  reply = "Glad you think so!";

else if (msg === "haha")
  reply = "😂";

else if (msg === "help")
  reply = "Try saying hi, hello, good morning, or ask my name.";

else if (msg === "bye")
  reply = "Goodbye! Have a nice day.";

else if (msg === "see you")
  reply = "See you later!";

else if (msg === "love you")
  reply = "Thank you ❤️";

else if (msg === "who are you")
  reply = "I am Vinay's Bot.";

else if (msg === "tell me a joke")
  reply = "Why do programmers prefer dark mode? Because light attracts bugs! 😄";
else if (msg.includes("fuck"))
  reply = "fuck you. chootya";
else if (msg.includes("dundayya"))
  reply = "why you are including gay person dundayya in chat";
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
  alert("sent");
document.getElementById("status").innerHTML = "From: "+msg.from.first_name;
  }
