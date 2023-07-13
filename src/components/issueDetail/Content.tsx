import React from 'react';

import MarkdownPreview from '@uiw/react-markdown-preview';

type Iprops = {
	issueContent: string;
};

function Content({ issueContent }: Iprops) {
	return <MarkdownPreview source={issueContent} />;
}

export default Content;
