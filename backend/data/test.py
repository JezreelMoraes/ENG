with open('./data/users.json', 'a+', encoding='utf-8') as file:
    users: list[dict] = json.load(file)
    newUser = {"username": "Nome", "password": "Senha"}

    users.append(newUser)
    json.dump(users, file, ensure_ascii=False, indent=4)
