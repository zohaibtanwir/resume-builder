import { Grid } from "@mantine/core";

export default function Builder() {
	return (
		<Grid>
			<Grid.Col span={8}>Form</Grid.Col>
			<Grid.Col span={4}>Preview</Grid.Col>
		</Grid>
	);
}
