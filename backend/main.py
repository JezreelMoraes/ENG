import json
from fastapi import FastAPI

app = FastAPI()

@app.get("/users")
async def list_users():
    with open("./data/users.json", encoding='utf-8') as file:
        users = json.load(file)
        return users

@app.get("/users/add")
async def add_user():
    with open('./data/users.json', 'a+', encoding='utf-8') as file:
        users: list[dict] = json.load(file)
        newUser = {"username": "Nome", "password": "Senha"}

        users.append(newUser)
        json.dump(users, file, ensure_ascii=False, indent=4)
