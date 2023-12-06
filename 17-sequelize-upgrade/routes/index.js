const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

// 기본주소 : localhost:PORT

router.get('/', controller.main);

// GET /players - 전체 선수 조회
router.get('/players', controller.getPlayers);

// GET /players/:player_id - 특정 선수 조회
router.get('/players/:player_id', controller.getPlayer)

// POST /players - 선수 추가
router.post('/players', controller.postPlayer);

// PATCH /players/:player_id/team - 특정 선수의 소속 팀 변경
router.patch('/players/:player_id/team', controller.patchPlayer);

// DELETE /players/:player_id - 특정 선수 삭제
router.delete('/players/:player_id', controller.deletePlayer);

// --- 팀 관련 api ---
// GET /teams - 전체 팀 조회
router.get('/teams', controller.getTeams);

// GET /teams/:team_id - 특정 팀 조회
router.get('/teams/:team_id', controller.getTeam);

// GET /teams/:team_id/players
router.get('/teams/:team_id/players', controller.getTeamPlayers);
module.exports = router;