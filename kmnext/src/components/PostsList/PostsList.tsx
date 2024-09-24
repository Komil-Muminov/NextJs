import { Space } from "antd";
import { ReactElement, useState } from "react";
import Post from "../Post/Post";
import Api from "@/api/api";
import { Posts } from "../../models";

const getData = async (): Promise<Posts> => {
	const data = await Api.getPosts();
	return data;
};

const PostsList = async (): Promise<ReactElement> => {
	const data = await getData();

	return (
		<Space>
			{data.map((item) => (
				<Post post={item} key={item.id} />
			))}
		</Space>
	);
};

export default PostsList;
