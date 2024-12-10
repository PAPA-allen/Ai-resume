import { Metadata } from 'next'
import React from 'react'
import ResumeEditor from './ResumeEditor'

export const metadata: Metadata = {
    title:"Create your resume"
}
const EditorPage = () => {
  return <ResumeEditor/>
}

export default EditorPage
