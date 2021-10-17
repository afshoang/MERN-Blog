import './singlePost.css'

const SinglePost = () => {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img
          className='singlePostImg'
          src='https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80'
          alt='single post'
        />
        <h1 className='singlePostTitle'>
          Magna ea aliqua nulla eiusmod laboris proident et
          <div className='singlePostEdit'>
            <i class='singlePostIcon far fa-edit'></i>
            <i class='singlePostIcon far fa-trash-alt'></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            Author: <b>HoangPham</b>
          </span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Exercitation eiusmod ipsum nostrud exercitation eu. Elit in amet
          laborum cillum aliquip officia occaecat ex officia laborum. Dolor anim
          non minim aute proident. Laborum commodo est adipisicing commodo magna
          nulla Lorem duis sit. Et officia et ullamco fugiat sit occaecat
          laboris et culpa in mollit. Tempor incididunt quis elit eiusmod sit
          duis dolor id velit. Exercitation esse amet in elit. Veniam in irure
          aliquip eu aute quis labore ex adipisicing. Id dolore nulla fugiat
          velit. Excepteur ea velit proident velit irure ad sit irure proident
          adipisicing deserunt irure. Dolor pariatur consequat et laborum.
          Aliqua do pariatur ut nulla consectetur reprehenderit. Nisi ea Lorem
          cillum dolor. Et exercitation aliqua ex est excepteur excepteur.
          Incididunt do dolore do ullamco proident laboris ad. Proident sit
          irure aute in quis ea amet mollit cupidatat anim. Enim cupidatat
          commodo pariatur excepteur laborum aliqua deserunt. Sint dolor cillum
          sint culpa sit Lorem labore id exercitation. Et commodo ullamco
          eiusmod deserunt sint reprehenderit magna ea nisi incididunt veniam.
          Pariatur laborum dolore amet id excepteur eiusmod enim. Cupidatat
          occaecat laborum sint aute minim consequat esse duis ea aute laborum
          qui voluptate veniam. Veniam amet sunt et aliquip reprehenderit minim
          minim consequat reprehenderit sit enim. Tempor laboris incididunt
          occaecat pariatur ex magna deserunt commodo laboris minim. Ut dolore
          adipisicing esse ad aute eu sunt ex exercitation. Est voluptate esse
          fugiat nisi dolore id Lorem occaecat. Aute nostrud aliquip id nulla
          officia exercitation. Aliquip amet quis quis esse incididunt ut
          deserunt voluptate aliqua. Cupidatat incididunt cupidatat culpa qui
          pariatur tempor consectetur laborum occaecat aute non magna laboris
          esse. Elit consectetur cupidatat proident eu nisi labore anim laboris
          fugiat esse. Minim amet voluptate cupidatat dolore ipsum occaecat
          cillum do occaecat occaecat ad voluptate do. Minim quis ad velit
          voluptate occaecat cupidatat officia.
        </p>
      </div>
    </div>
  )
}

export default SinglePost
