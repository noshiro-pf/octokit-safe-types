import { type EndpointKeys } from '@octokit/types';
import { octokitHeaders, OWNER, REPO } from '../../constants.mjs';
import { octokit } from '../../octokit.mjs';

export const updateRepoVariable = async ({
  name,
  value,
}: Readonly<{
  name: string;
  value: string;
}>): Promise<void> => {
  // https://docs.github.com/ja/rest/repos/rules?apiVersion=2022-11-28#update-a-repository-ruleset
  await octokit.request(
    'PATCH /repos/{owner}/{repo}/actions/variables/{name}' satisfies EndpointKeys,
    {
      owner: OWNER,
      repo: REPO,
      headers: octokitHeaders,

      name,
      value,
    },
  );
};
