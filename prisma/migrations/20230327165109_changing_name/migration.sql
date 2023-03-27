/*
  Warnings:

  - You are about to drop the column `user_id` on the `accounts` table. All the data in the column will be lost.
  - Added the required column `userId` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_accounts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_accounts" ("access_token", "createdAt", "expires_at", "id", "id_token", "provider", "providerAccountId", "refresh_token", "scope", "session_state", "token_type", "type", "updatedAt") SELECT "access_token", "createdAt", "expires_at", "id", "id_token", "provider", "providerAccountId", "refresh_token", "scope", "session_state", "token_type", "type", "updatedAt" FROM "accounts";
DROP TABLE "accounts";
ALTER TABLE "new_accounts" RENAME TO "accounts";
CREATE UNIQUE INDEX "accounts_provider_providerAccountId_key" ON "accounts"("provider", "providerAccountId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
