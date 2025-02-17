use db_views;
-- 상점 거래가능 아이템 목록
-- CREATE VIEW sales_view AS
-- SELECT name, position
-- FROM employees
-- WHERE department = 'Sales';

-- user room 결합 목록
DROP VIEW IF EXISTS room_view;
CREATE VIEW room_view AS
SELECT 
    u.code AS user_code,
    u.id AS user_id,
    u.nick AS user_nick,
    u.profile_path AS user_profile,
    r.code AS room_code,
    r.name AS room_name,
    r.like AS room_like,
    r.color AS room_color
FROM db_current.user AS u
INNER JOIN db_current.room AS r ON u.code = r.current_u_code
WHERE u.code > 1;

DROP VIEW IF EXISTS room_item_nft_view;
CREATE VIEW room_item_nft_view AS
SELECT 
    r_i.r_code AS room_code,
    i.code AS item_code,
    n.code AS NFT_code,
    n.name AS item_name,
    n.path AS item_path,
    r_i.position AS position,
    r_i.rotate AS rotate
FROM db_current.item AS i
INNER JOIN db_current.nft AS n ON n.code = i.n_code
INNER JOIN db_current.room_item AS r_i ON r_i.i_code = i.code;

DROP VIEW IF EXISTS user_wallet_view;
CREATE VIEW user_wallet_view AS
SELECT 
    u.code AS user_code,
    u.id As id,
    u.nick AS nick,
    u.profile_path AS 'profile',
	w.account AS account,
	w.private_key AS 'key'
FROM db_current.user AS u
INNER JOIN db_current.new_wallet AS w ON u.code = w.u_code
WHERE u.code > 1;

DROP VIEW IF EXISTS room_item_view;
CREATE VIEW room_item_view AS
SELECT 
	r.code AS room_code,
    r_i.code AS code,
	r_i.i_url AS url,
	r_i.position AS pos,
	r_i.rotate AS rot,
    r_i.name AS 'name'
FROM db_current.room AS r
INNER JOIN db_current.new_room_item AS r_i ON r.code = r_i.r_code;


DROP VIEW IF EXISTS room_comment_user_view;
CREATE VIEW room_comment_user_view AS
SELECT 
    r.code AS room_code,
    u.nick AS user_nick,
    c.comment AS content,
    c.code AS comment_code,
    c.datetime AS `time`
FROM db_record.comment AS c
INNER JOIN db_current.room AS r ON r.code = c.r_code
INNER JOIN db_current.user AS u ON u.code = c.u_code
WHERE c.deleted = FALSE;

-- select * from room_view;

/*
CREATE VIEW combined_view AS
SELECT 
    u.code AS user_code,
    u.id AS user_id,
    u.nick AS user_nick,
    r.code AS room_code,
    r.name AS room_name,
    r.like AS room_like,
    w.code AS wellet_code
FROM db_current.user AS u
INNER JOIN db_current.room AS r ON u.code = r.current_u_code
INNER JOIN db_current.wallet AS w ON u.code = w.U_code;
*/

-- select user_nick, room_name from room_view where room_code = 1;
-- select item_code, nft_code, item_name, item_path, position, rotate from room_item_nft_view where room_code = 1;

-- select * from db_personal.user;

-- INSERT INTO DB_personal.user (code, id, pw, public_key, name, email,phone) VALUES (1, 'guest', 'qAFJfr7tQ4wHGq9', NULL, 'Guest', NULL, NULL);

-- select * from db_views.room_comment_user_view;