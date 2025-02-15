const Queue = require("bull");

var clearImagesQueue = new Queue(
	"clear-image-queue",
	`${process.env.OG_IMAGE_REDIS_URL}2`,
	{ redis: { tls: true, enableTLSForSentinelMode: false } }
);

module.exports = {
	clearImagesQueue,
};
