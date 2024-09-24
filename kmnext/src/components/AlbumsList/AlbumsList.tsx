import { Flex } from "antd";
import { FC, ReactElement } from "react";
import Api from "../../api/api";
import { Albums } from "../../models";
import Album from "../Album/Album";
const getData = async (): Promise<Albums> => {
	const data = await Api.getAlbums();
	return data;
};

const AlbumsList: FC = async (): Promise<ReactElement> => {
	const data = await getData();

	return (
		<Flex wrap="wrap" gap="middle" justify="center">
			{data.map((album) => (
				<Album albumId={album.id} />
			))}
		</Flex>
	);
};

export default AlbumsList;
