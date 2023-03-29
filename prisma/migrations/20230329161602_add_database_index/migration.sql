-- DropForeignKey
ALTER TABLE `CategoriesOnBooks` DROP FOREIGN KEY `CategoriesOnBooks_book_id_fkey`;

-- DropForeignKey
ALTER TABLE `CategoriesOnBooks` DROP FOREIGN KEY `CategoriesOnBooks_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `accounts` DROP FOREIGN KEY `accounts_userId_fkey`;

-- DropForeignKey
ALTER TABLE `ratings` DROP FOREIGN KEY `ratings_book_id_fkey`;

-- DropForeignKey
ALTER TABLE `ratings` DROP FOREIGN KEY `ratings_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `sessions` DROP FOREIGN KEY `sessions_userId_fkey`;

-- CreateIndex
CREATE INDEX `CategoriesOnBooks_book_id_idx` ON `CategoriesOnBooks`(`book_id`);

-- RenameIndex
ALTER TABLE `CategoriesOnBooks` RENAME INDEX `CategoriesOnBooks_categoryId_fkey` TO `CategoriesOnBooks_categoryId_idx`;

-- RenameIndex
ALTER TABLE `accounts` RENAME INDEX `accounts_userId_fkey` TO `accounts_userId_idx`;

-- RenameIndex
ALTER TABLE `ratings` RENAME INDEX `ratings_book_id_fkey` TO `ratings_book_id_idx`;

-- RenameIndex
ALTER TABLE `ratings` RENAME INDEX `ratings_user_id_fkey` TO `ratings_user_id_idx`;

-- RenameIndex
ALTER TABLE `sessions` RENAME INDEX `sessions_userId_fkey` TO `sessions_userId_idx`;
