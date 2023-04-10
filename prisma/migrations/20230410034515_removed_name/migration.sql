/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "CPF" INTEGER,
    "avatarUrl" TEXT NOT NULL
);
INSERT INTO "new_User" ("CPF", "avatarUrl", "email", "id", "password", "userName") SELECT "CPF", "avatarUrl", "email", "id", "password", "userName" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_CPF_key" ON "User"("CPF");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
