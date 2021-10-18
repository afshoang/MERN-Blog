import './post.css'

const Post = () => {
  return (
    <div className='post'>
      <img
        className='postImg'
        src='https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80'
        alt='single post'
      />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Book</span>
          <span className='postCat'>NodeJs</span>
        </div>
        <span className='postTitle'>
          Ad sint sunt occaecat adipisicing cupidatat dolor.
        </span>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>
        Eiusmod fugiat veniam do proident laboris laboris amet aliquip voluptate
        deserunt officia nulla sit excepteur. Et ullamco irure aute adipisicing
        mollit ex. Sunt do et elit deserunt consequat. Proident aliqua ut minim
        ex officia. Eiusmod fugiat veniam do proident laboris laboris amet
        aliquip voluptate deserunt officia nulla sit excepteur. Et ullamco irure
        aute adipisicing mollit ex. Sunt do et elit deserunt consequat. Proident
        aliqua ut minim ex officia. Eiusmod fugiat veniam do proident laboris
        laboris amet aliquip voluptate deserunt officia nulla sit excepteur. Et
        ullamco irure aute adipisicing mollit ex. Sunt do et elit deserunt
        consequat. Proident aliqua ut minim ex officia.
      </p>
    </div>
  )
}

export default Post
