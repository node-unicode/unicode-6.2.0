module.exports=require('../decode-property-map.js')(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))