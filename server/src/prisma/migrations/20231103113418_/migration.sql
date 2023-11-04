/*
  Warnings:

  - A unique constraint covering the columns `[date]` on the table `schedule` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "exercise" DROP CONSTRAINT "exercise_groupId_fkey";

-- AlterTable
ALTER TABLE "exercise" ALTER COLUMN "groupId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "schedule" ALTER COLUMN "date" DROP DEFAULT,
ALTER COLUMN "date" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "schedule_date_key" ON "schedule"("date");

-- AddForeignKey
ALTER TABLE "exercise" ADD CONSTRAINT "exercise_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "group"("id") ON DELETE SET NULL ON UPDATE CASCADE;
