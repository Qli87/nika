import { all } from 'redux-saga/effects'
import { companySaga } from './companySaga'
import { loginSaga } from './loginSaga'
import { userSaga } from './userSaga'
import { articleSaga } from './articleSaga'
import { warehouseSaga } from './warehouseSaga'
import { invoiceSaga } from './invoiceSaga'

export default function* rootSaga() {
    yield all([
        userSaga(),
        loginSaga(),
        companySaga(),
        articleSaga(),
        warehouseSaga(),
        invoiceSaga()
    ])
}