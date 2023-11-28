const express = require('express');
const app = express();
const PORT = 8000;

// multer관련 설정
const multer = require('multer');
const path = require('path'); // 경로에 관한 내장 모듈
const upload = multer({
    dest: 'uploads/', // dest: 클라이언트가 업로드한 파일을 저장할 서버측 경로
})

// multer 세부 설정
const uploadDetail = multer({
    storage : multer.diskStorage({
        destination(req, file, done){
            //done : callback 함수
            //done(null, xx) : null => 에러가 없다는 의미
            done(null, 'uploads/'); // 파일을 업로드할 경로 설정
        },
        filename(req, file, done) {
            // 파일의 확장자를 추출 => "path" 모듈 활용
            const ext = path.extname(file.originalname);
            console.log('ext >', ext);
            console.log('file name >', path.basename(file.originalname, ext));

            // path.basename(file.originalname, ext) => apple
            // => 확장자를 제외한 파일이름만
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    }
    }),
    limits: {
        fileSize: 5* 1024* 1024
    }
})

app.set('view engine', 'ejs');
app.set('view', './views');
app.use(express.urlencoded({extended: ture}));
app.use(express.json());
// static 등록 => 이미지 경로에 접근 가능(프론트에서)
app.use('/uploads', express.static(__dirname + '/uploads'));

app.get('/', (req, res)=> {
    res.render('index');
})

// 1. single(): 하나의 파일 업로드
// upload.single('userfile')
app.post('/upload', uploadDetail.single('userfile'), (req, res)=> {
    console.log(req.file);
    console.log(req.body);
        res.send(req.body);
})


app.post('/upload/array', uploadDetail.array('userfiles', (req, res)=>{
    // [{file1 정보}, {file2 정보}, ...] : 배열 형태
    console.log(req.files);
    console.log(req.body);
    res.send('하나의 인풋에 여러 파일 업로드 완료!');
}))

app.post('/upload/fields', uploadDetail.fields([{name: 'userfile1'}, {name: 'userfile2'}]),
(req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.send('각각의 파일');
}
)

// 동적 폼 전송
app.post('/dynamic', uploadDetail.single('dynamicFile'), (req, res)=> {
    console.log(req.file);
    console.log(req.body);
    res.send({file: req.file, title:req.body.title});
})
app.listen(PORT, ()=> {
    console.log(`${PORT} port is opening!`);
})

