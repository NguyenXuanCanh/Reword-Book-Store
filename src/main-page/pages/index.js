import React from 'react'
import { useRecoilValue } from 'recoil';
import { textState } from "@/main-page/recoil/atoms/test";
import HeaderBar from '@/main-page/containers/header-bar';

export default function MainPage() {
  const testState = useRecoilValue(textState);
  return (
    <>
      <HeaderBar />
      <h1>MainPage {testState.text}</h1>
    </>
  )
}
