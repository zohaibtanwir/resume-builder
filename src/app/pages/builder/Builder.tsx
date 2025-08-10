import { Grid, Input, TagsInput, Title } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { Link, RichTextEditor } from "@mantine/tiptap";
import Highlight from "@tiptap/extension-highlight";
import SubScript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

function _Form() {
	const DUMMY_CONTENT =
		'<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>';

	const editor = useEditor({
		extensions: [
			StarterKit,
			Underline,
			Link,
			Superscript,
			SubScript,
			Highlight,
			TextAlign.configure({ types: ["heading", "paragraph"] })
		],
		content: DUMMY_CONTENT
	});

	return (
		<>
			<Title order={3}>Edit Resume</Title>
			<Title order={5}>Personal Details</Title>
			<Grid>
				<Grid.Col span={6}>
					<Input.Wrapper label="Full Name">
						<Input />
					</Input.Wrapper>
				</Grid.Col>
				<Grid.Col span={6}>
					<Input.Wrapper label="Professional Title">
						<Input />
					</Input.Wrapper>
				</Grid.Col>
				<Grid.Col span={6}>
					<Input.Wrapper label="Email">
						<Input />
					</Input.Wrapper>
				</Grid.Col>
				<Grid.Col span={6}>
					<Input.Wrapper label="Phone">
						<Input />
					</Input.Wrapper>
				</Grid.Col>
				<Grid.Col span={12}>
					<Input.Wrapper label="Address">
						<Input />
					</Input.Wrapper>
				</Grid.Col>
			</Grid>

			<Title order={5}>Professional Details</Title>
			<Grid>
				<Grid.Col span={6}>
					<Input.Wrapper label="LinkedIn">
						<Input />
					</Input.Wrapper>
				</Grid.Col>
				<Grid.Col span={6}>
					<Input.Wrapper label="Stack Overflow">
						<Input />
					</Input.Wrapper>
				</Grid.Col>
			</Grid>

			<Grid>
				<Grid.Col span={12}>
					<TagsInput label="Skills" />
				</Grid.Col>
				<Grid.Col span={12}>
					<TagsInput label="Languages" />
				</Grid.Col>
			</Grid>

			<Title order={5}>Work Experience</Title>
			<Grid>
				<Grid.Col span={12}>
					<RichTextEditor editor={editor}>
						<RichTextEditor.Toolbar
							sticky
							stickyOffset="var(--docs-header-height)"
						>
							<RichTextEditor.ControlsGroup>
								<RichTextEditor.Bold />
								<RichTextEditor.Italic />
								<RichTextEditor.Underline />
								<RichTextEditor.Strikethrough />
								<RichTextEditor.ClearFormatting />
								<RichTextEditor.Highlight />
								<RichTextEditor.Code />
							</RichTextEditor.ControlsGroup>

							<RichTextEditor.ControlsGroup>
								<RichTextEditor.H1 />
								<RichTextEditor.H2 />
								<RichTextEditor.H3 />
								<RichTextEditor.H4 />
							</RichTextEditor.ControlsGroup>

							<RichTextEditor.ControlsGroup>
								<RichTextEditor.Blockquote />
								<RichTextEditor.Hr />
								<RichTextEditor.BulletList />
								<RichTextEditor.OrderedList />
								<RichTextEditor.Subscript />
								<RichTextEditor.Superscript />
							</RichTextEditor.ControlsGroup>

							<RichTextEditor.ControlsGroup>
								<RichTextEditor.Link />
								<RichTextEditor.Unlink />
							</RichTextEditor.ControlsGroup>

							<RichTextEditor.ControlsGroup>
								<RichTextEditor.AlignLeft />
								<RichTextEditor.AlignCenter />
								<RichTextEditor.AlignJustify />
								<RichTextEditor.AlignRight />
							</RichTextEditor.ControlsGroup>

							<RichTextEditor.ControlsGroup>
								<RichTextEditor.Undo />
								<RichTextEditor.Redo />
							</RichTextEditor.ControlsGroup>
						</RichTextEditor.Toolbar>

						<RichTextEditor.Content />
					</RichTextEditor>
				</Grid.Col>
			</Grid>

			<Title order={5}>Awards</Title>
			<Grid>
				<Grid.Col span={6}>
					<Input.Wrapper label="Award Title">
						<Input />
					</Input.Wrapper>
				</Grid.Col>
				<Grid.Col span={6}>
					<DateInput value={new Date()} label="Awarded On" />
				</Grid.Col>
				<Grid.Col span={12}>
					<Input.Wrapper label="Company / Organization">
						<Input />
					</Input.Wrapper>
				</Grid.Col>
			</Grid>
		</>
	);
}

function _Preview() {
	return <Title order={3}>Preview Goes Here</Title>;
}

export default function Builder() {
	return (
		<Grid>
			<Grid.Col span={8}>
				<_Form />
			</Grid.Col>
			<Grid.Col span={4}>
				<_Preview />
			</Grid.Col>
		</Grid>
	);
}
