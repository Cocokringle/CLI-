# CLI-application

# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list
https://monosnap.com/file/0aMkxUKrxc7insgE3q2Q5gME2Zu3nP

# Получаем контакт по id
node index.js --action get --id 5
https://monosnap.com/file/mAxbucq1KkypCv8K5A6SyYhm87s3q3

# Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/mkthOIiUrLAVyl073A0xEJZiCW4Y3i

# Удаляем контакт
node index.js --action remove --id=3
https://monosnap.com/file/EQhfDKM7CV6NkoSbLn0S1FehWjvWhN
