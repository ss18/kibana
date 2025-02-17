/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// @ts-ignore
import { functionWrapper } from '../../interpreter/test_helpers';
import { kibanaMarkdown } from './markdown_fn';

jest.mock('ui/new_platform', () =>
  require('../../../ui/public/new_platform/index.test.mocks').mockNewPlatformBackdoor()
);

describe('interpreter/functions#markdown', () => {
  const fn = functionWrapper(kibanaMarkdown);
  const args = {
    font: { spec: { fontSize: 12 } },
    openLinksInNewTab: true,
    markdown: '## hello _markdown_',
  };

  it('returns an object with the correct structure', async () => {
    const actual = await fn(undefined, args);
    expect(actual).toMatchSnapshot();
  });
});
