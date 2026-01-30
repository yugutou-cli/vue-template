import process from 'node:process'

// scripts/check-pnpm.mjs
// 检查是否使用了 pnpm
// process.env.npm_config_user_agent 包含了触发此脚本的包管理器信息
const userAgent = process.env.npm_config_user_agent

// 如果 lockfile 是 pnpm 的，但执行命令的 agent 不是 pnpm，则报错
if (!userAgent || !userAgent.startsWith('pnpm')) {
  console.error('This project uses pnpm. Please install dependencies using `pnpm install`.')
  process.exit(1) // 退出码 1 表示错误
}
// 如果是 pnpm 触发的，则静默通过，继续执行 pnpm install
console.log('pnpm is used.')
process.exit(0) // 退出码 0 表示成功
