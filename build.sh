NODE_ENV=development
export NODE_ENV
npx webpack --config "config/webpack/$NODE_ENV.js" "$@"
