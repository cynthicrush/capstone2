INSERT INTO users (username, email, password, first_name, last_name, is_admin)
VALUES ('Admin',
        'admin@email.com',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'Admin',
        'One',
        TRUE
       ), (
        'Test User',
        'testuser@email.com',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'Test',
        'User',
        FALSE
       )