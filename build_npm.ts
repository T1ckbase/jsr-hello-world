import { build, emptyDir } from '@deno/dnt';
import denoJson from './deno.json' with { type: 'json' };

await emptyDir('./npm');

await build({
  entryPoints: ['./hello-world.ts', './hello-world.json'],
  outDir: './npm',
  skipNpmInstall: true,
  test: false,
  compilerOptions: {
    lib: ['ESNext'],
  },
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  package: {
    // package.json properties
    name: '@t1ckbase/hello-world',
    version: denoJson.version,
    description: 'jsr-hello-world',
    license: 'MIT',
    repository: {
      type: 'git',
      url: 'git+https://github.com/T1ckbase/jsr-hello-world.git',
    },
    bugs: {
      url: 'https://github.com/T1ckbase/jsr-hello-world/issues',
    },
  },
  postBuild() {
    // steps to run after building and before running the tests
    Deno.copyFileSync('LICENSE', 'npm/LICENSE');
    Deno.copyFileSync('README.md', 'npm/README.md');
  },
});
