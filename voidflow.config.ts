// voidflow settings for this repo; `kind` picks the defaults: https://github.com/taraxvoid/voidflow/blob/main/docs/config.md

import type { VoidflowConfig } from '@taraxvoid/voidflow/config'

export default {
    kind: 'site',
    // Only main may deploy to prod; the preview environment stays open to PR
    // branches, which is why its token is scoped to the preview Worker.
    rulesets: { environments: { prod: ['main'] } },
    cloudflare: {
        account: '305f9a617cbd47585f6c122f9ca166d0',
        adminTokenEnv: 'CF_TOKEN_ADMIN',
        envs: [
            // The prod Worker and synthnight.com from wrangler.jsonc env.prod.
            { env: 'prod' },
            // env.preview's Worker (synthomaha-preview), no zones.
            { env: 'preview', zones: [] },
        ],
        // The pre-voidflow deploy token. The fleet config keyed this repo as
        // synthomaha/synthomaha.net; add any voidflow:synthomaha/synthomaha.net:*
        // tokens `voidflow plan tokens` reports.
        retire: ['synthomaha-deploys-worker'],
    },
} satisfies VoidflowConfig
