import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchPosts } from './actions'
import { useEffect } from 'react'

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [])
  return (
    <div></div>
  )
}

export default Posts;
