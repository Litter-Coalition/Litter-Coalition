import React from "react";
import styled from "styled-components";

const sharedHeaderConfig = {
	textAlign: "center",
	color: "#226F9C",
	fontFamily: "Roboto, sans-serif"
}

export const LargeHeader = ({ text }) => {
	const Heading = styled.h1(() => ({
		...sharedHeaderConfig,
		textTransform : "uppercase",
		fontSize: 48
	}));
	return <Heading>{text}</Heading>;
};

export const MediumHeader = ({ text, color }) => {
	const Heading = styled.h2(() => ({
		...sharedHeaderConfig,
		textTransform : "uppercase",
		fontSize: 36
	}));
	return <Heading>{text}</Heading>;
};

export const SmallHeader = ({ text }) => {
	const Heading = styled.h3(() => ({
		...sharedHeaderConfig,
		textTransform : "capitalize",
		fontSize: 24
	}));
	return <Heading>{text}</Heading>;
};