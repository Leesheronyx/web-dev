from pyrogram import Client

api_id = 14870093
api_hash = "7a7fc4474b092f6e06ba7bb633c11b48"

with Client("account", api_id, api_hash) as app:
    app.send_message("me", "Greetings form **Pyrogram**!")