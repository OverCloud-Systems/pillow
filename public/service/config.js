self.__uv$config = {
    prefix: '/service/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/service/handler.js',
    bundle: '/service/bundle.js',
    config: '/service/config.js',
    sw: '/service/sw.js',
};