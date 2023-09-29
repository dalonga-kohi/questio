SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `friends` (
  `id` int(11) NOT NULL,
  `follower_id` int(11) NOT NULL,
  `target_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- INSERT INTO `friends` (`id`, `follower_id`, `target_id`) VALUES
-- (1, 1, 2),
-- (2, 1, 3),
-- (3, 3, 2),
-- (7, 10, 3),
-- (8, 10, 6),
-- (9, 1, 10),
-- (11, 10, 2);

CREATE TABLE `quests` (
  `id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL,
  `title` varchar(18) NOT NULL,
  `description` varchar(400) NOT NULL,
  `image` varchar(255) DEFAULT '/api/v1/img/sunset.jpg',
  `steps` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `tags` varchar(65) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `creation_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- INSERT INTO `quests` (`id`, `author_id`, `title`, `description`, `image`, `steps`, `tags`, `creation_date`) VALUES
-- (1, 1, 'Get some bitches', 'Lorem impsum dsafdasdsadsad dsa dsad asd sam,jkyiokuylkiuo.d asdf afewgtwe', '/api/v1/img/example.jpg', 'meet a girl;make her a girlfriend;', 'dating;social;male', '2023-09-10 12:42:46'),
-- (2, 3, 'wake up!', 'It does metter', '/api/v1/img/sunset.jpg', NULL, 'self-improve;beauty;easy', '2023-09-17 09:54:56'),
-- (4, 10, 'hello postman', 'very short desc', '/api/v1/img/1695305988857-uqhypf9ftse.jpg', 'not hard;', 'hi;greet', '2023-09-21 14:19:48'),
-- (16, 10, 'Kill 10 people', 'very short desc', '/api/v1/img/1695386476169-vsgb9xti0o.jpg', 'get gun;', 'savage;school-shooting', '2023-09-22 12:41:16'),
-- (17, 10, 'Like && Sub', 'very short desc', '/api/v1/img/1695386557311-l34s4lqqz9a.jpg', 'like;subscribe', 'easy', '2023-09-22 12:42:37'),
-- (18, 10, 'Like && Sub', 'very short desc', '/api/v1/img/1695411943278-yan6lj3oo.jpg', 'like;subscribe', 'easy', '2023-09-22 19:45:43');

CREATE TABLE `quests_storage` (
  `id` int(11) NOT NULL,
  `quest_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `is_done` tinyint(1) NOT NULL DEFAULT 0,
  `image_done` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `quests_storage` (`id`, `quest_id`, `user_id`, `is_done`, `image_done`) VALUES
(1, 1, 1, 0, NULL),
(2, 1, 2, 0, NULL),
(6, 2, 10, 0, NULL),
(7, 4, 10, 0, NULL);

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(512) NOT NULL,
  `preferences` varchar(100) DEFAULT NULL,
  `verified` tinyint(1) NOT NULL DEFAULT 0,
  `premium` int(1) NOT NULL DEFAULT 0,
  `creation_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- INSERT INTO `users` (`id`, `email`, `password`, `preferences`, `verified`, `premium`, `creation_date`) VALUES
-- (1, 'dewsed', 'dsadsad', NULL, 0, 0, '2023-09-07 22:00:00'),
-- (2, 'dsadsa@d', 'indeed', NULL, 1, 0, '2023-09-07 22:00:00'),
-- (3, 'dsa', 'das', NULL, 0, 0, '2023-09-07 22:00:00'),
-- (4, 'dasd', 'das', NULL, 0, 0, '2023-09-07 22:00:00'),
-- (5, 'dsadsad@dfadf.com', 'dsaddsa', NULL, 0, 0, '2023-09-08 15:17:41'),
-- (15, 'megaseba1@gmail.com', '$2b$08$gEbTrZLk9FwBq96pfyEqSeUWWi3AU66FTwhl7U7U3XkDWmoqsIEzu', 'laga', 1, 0, '2023-09-18 18:42:40'),
-- (16, 'megaseb@changed', '$2b$08$3xvIYn/CE2e3z/mR5daIZ.36iGsBSL3v7UVlGeWWdVvrxHoXllzVC', 'NULL', 1, 0, '2023-09-19 17:31:17'),
-- (19, 'gig.non@interia.eu', '$2b$08$fmGXpgisJhg3o.q255KDEORWkCkLUBI2U53/NdwvJai60dnOlBrRq', 'dicks;dildos', 1, 0, '2023-09-20 17:19:57');

CREATE TABLE `users_data` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `avatar` varchar(300) NOT NULL DEFAULT '/api/v1/img/example.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- INSERT INTO `users_data` (`id`, `user_id`, `user_name`, `avatar`) VALUES
-- (1, 1, 'maciek', '/api/v1/img/example.jpg'),
-- (2, 2, 'wojek', '/api/v1/img/example.jpg'),
-- (3, 3, 'gandi', '/api/v1/img/example.jpg'),
-- (6, 15, 'MAL_I01', '/api/v1/img/example.jpg'),
-- (7, 16, 'MyNewName', '/api/v1/img/example.jpg'),
-- (10, 19, 'testowy', '/api/v1/img/1695304211472-fy4sjyv55cm.jpg');


ALTER TABLE `friends`
  ADD PRIMARY KEY (`id`),
  ADD KEY `friend_1` (`follower_id`),
  ADD KEY `friend_2` (`target_id`);

ALTER TABLE `quests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author` (`author_id`);

ALTER TABLE `quests_storage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quest_id` (`quest_id`),
  ADD KEY `user_storage` (`user_id`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `users_data`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user` (`user_id`) USING BTREE;


ALTER TABLE `friends`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

ALTER TABLE `quests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

ALTER TABLE `quests_storage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

ALTER TABLE `users_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;


ALTER TABLE `friends`
  ADD CONSTRAINT `friend_1` FOREIGN KEY (`follower_id`) REFERENCES `users_data` (`id`),
  ADD CONSTRAINT `friend_2` FOREIGN KEY (`target_id`) REFERENCES `users_data` (`id`);

ALTER TABLE `quests`
  ADD CONSTRAINT `author` FOREIGN KEY (`author_id`) REFERENCES `users_data` (`id`);

ALTER TABLE `quests_storage`
  ADD CONSTRAINT `quest_id` FOREIGN KEY (`quest_id`) REFERENCES `quests` (`id`),
  ADD CONSTRAINT `user_storage` FOREIGN KEY (`user_id`) REFERENCES `users_data` (`id`);

ALTER TABLE `users_data`
  ADD CONSTRAINT `user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
