import { Badge, PostContainer } from './styles'

import { FcLike, FcComments } from 'react-icons/fc'

export type PostProps = {
  title: string;
  url: string;
  likes: number;
  comments: number;
  created_at: string;
  reading_minutes: number;
}

export const Post = ({ title, url, likes, comments, created_at, reading_minutes }: PostProps) => {
  return (
    // <a href='#' target='_blank'>
    <PostContainer href={url} target='_blank'>
      <div className='postDescription'>
        <h2>{title}</h2>
        <div className='infoCounts'>
          <Badge>
            <FcLike /><p>{likes}</p>
          </Badge>
          <Badge>
            <FcComments /><p>{comments}</p>
          </Badge>
        </div>
      </div>
      <div className='postInfos'>
        <p>{new Date(created_at).toLocaleDateString('pt-BR')}</p>
        <p className='reading_minutes'>{reading_minutes} MIN READ</p>
      </div>
    </PostContainer>
    // </a>
  )
}
