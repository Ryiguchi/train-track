-- DropForeignKey
ALTER TABLE "exercise" DROP CONSTRAINT "exercise_userId_fkey";

-- DropForeignKey
ALTER TABLE "group" DROP CONSTRAINT "group_userId_fkey";

-- DropForeignKey
ALTER TABLE "schedule" DROP CONSTRAINT "schedule_userId_fkey";

-- DropForeignKey
ALTER TABLE "workout" DROP CONSTRAINT "workout_userId_fkey";

-- DropIndex
DROP INDEX "schedule_date_idx";

-- DropIndex
DROP INDEX "workout_exerciseId_date_idx";

-- AlterTable
ALTER TABLE "exercise" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "group" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "schedule" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "workout" ALTER COLUMN "userId" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "exercise_userId_idx" ON "exercise"("userId");

-- CreateIndex
CREATE INDEX "group_userId_idx" ON "group"("userId");

-- CreateIndex
CREATE INDEX "schedule_date_userId_idx" ON "schedule"("date", "userId");

-- CreateIndex
CREATE INDEX "user_email_googleId_idx" ON "user"("email", "googleId");

-- CreateIndex
CREATE INDEX "workout_exerciseId_date_userId_idx" ON "workout"("exerciseId", "date", "userId");

-- AddForeignKey
ALTER TABLE "exercise" ADD CONSTRAINT "exercise_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group" ADD CONSTRAINT "group_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workout" ADD CONSTRAINT "workout_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
