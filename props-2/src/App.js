import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const USER_DATA = {
  name: "Happiness 太郎",
  img: "https://avatars.githubusercontent.com/u/103230797",
  handle: "happiness chain"
};

function MyCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="アバター画像" />
      <Card.Body>
        <Card.Title>ユーザー名</Card.Title>
        <Card.Text>ハンドルネーム</Card.Text>
      </Card.Body>
    </Card>
  )
}

function App() {
  return (
    <MyCard
      user={USER_DATA}
    />
  );
}

export default App
