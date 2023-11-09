/*
  Warnings:

  - You are about to drop the column `exercises` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[date,groupId]` on the table `schedule` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `group` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `schedule` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `date` on the `schedule` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `userId` to the `workout` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `date` on the `workout` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "schedule" DROP CONSTRAINT "schedule_groupId_fkey";

-- DropForeignKey
ALTER TABLE "workout" DROP CONSTRAINT "workout_exerciseId_fkey";

-- DropIndex
DROP INDEX "schedule_date_key";

-- AlterTable
ALTER TABLE "exercise" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "group" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "schedule" ADD COLUMN     "userId" INTEGER NOT NULL,
DROP COLUMN "date",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "groupId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "exercises",
ADD COLUMN     "googleId" TEXT,
ALTER COLUMN "password" DROP NOT NULL;

-- AlterTable
ALTER TABLE "workout" ADD COLUMN     "userId" INTEGER NOT NULL,
DROP COLUMN "date",
ADD COLUMN     "date" DATE NOT NULL;

-- CreateIndex
CREATE INDEX "schedule_date_idx" ON "schedule"("date");

-- CreateIndex
CREATE UNIQUE INDEX "schedule_date_groupId_key" ON "schedule"("date", "groupId");

-- CreateIndex
CREATE INDEX "workout_exerciseId_date_idx" ON "workout"("exerciseId", "date");

-- AddForeignKey
ALTER TABLE "exercise" ADD CONSTRAINT "exercise_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group" ADD CONSTRAINT "group_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workout" ADD CONSTRAINT "workout_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workout" ADD CONSTRAINT "workout_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
