/*
  Warnings:

  - You are about to alter the column `name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - Added the required column `type` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "DifficultyEnum" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "difficulty" "DifficultyEnum" NOT NULL DEFAULT 'EASY',
ADD COLUMN     "eagerToLearn" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "techStack" TEXT[] DEFAULT ARRAY['React', 'Node', 'Express', 'MongoDB']::TEXT[],
ADD COLUMN     "type" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(255);
