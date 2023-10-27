/*
  Warnings:

  - You are about to drop the column `imageUlrs` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "imageUlrs",
ADD COLUMN     "imageUrls" TEXT[];
