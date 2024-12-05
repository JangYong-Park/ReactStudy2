import api from '../ax/axiosSetting'


/**
 * 아이디 중복  체크
 * @param {id: 검사 아이디} obj 
 * @returns 
 */
export const memberIdCheck = (obj) => {
    return api.post('/member/findId', JSON.stringify(obj)
    , {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

/**
 * 지역 리스트 불러오기
 * @returns 
 */
export const areaList = () => {
    return api.get('/area/list');
}
