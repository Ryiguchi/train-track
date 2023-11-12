/*
  Warnings:

  - A unique constraint covering the columns `[name,userId]` on the table `exercise` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,userId]` on the table `group` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[date,groupId,userId]` on the table `schedule` will be added. If there are existing duplicate values, this will fail.
  - Made the column `userId` on table `exercise` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `group` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `schedule` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `workout` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "exercise" DROP CONSTRAINT "exercise_userId_fkey";

-- DropForeignKey
ALTER TABLE "group" DROP CONSTRAINT "group_userId_fkey";

-- DropForeignKey
ALTER TABLE "schedule" DROP CONSTRAINT "schedule_userId_fkey";

-- DropForeignKey
ALTER TABLE "workout" DROP CONSTRAINT "workout_userId_fkey";

-- DropIndex
DROP INDEX "exercise_name_key";

-- DropIndex
DROP INDEX "exercise_slug_key";

-- DropIndex
DROP INDEX "group_name_key";

-- DropIndex
DROP INDEX "schedule_date_groupId_key";

-- AlterTable
ALTER TABLE "exercise" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "group" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "schedule" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "workout" ALTER COLUMN "userId" SET NOT NULL,
ALTER COLUMN "date" SET DATA TYPE TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "exercise_name_userId_key" ON "exercise"("name", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "group_name_userId_key" ON "group"("name", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "schedule_date_groupId_userId_key" ON "schedule"("date", "groupId", "userId");

-- AddForeignKey
ALTER TABLE "exercise" ADD CONSTRAINT "exercise_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group" ADD CONSTRAINT "group_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workout" ADD CONSTRAINT "workout_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
