import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import 'antd/dist/antd.less';
// import 'lib-flexible'
<<<<<<< HEAD
import './styles/index.less';
=======
import './styles/index.less'
import 'react-quill/dist/quill.snow.css';
>>>>>>> d425090bda079b4e32dc20517a240857efc184c9

// 缓存白名单
const persistConfig = {
  key: 'qfyw',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['index', 'login', 'common'],
};

// 数据持久化
const persistEnhancer =
  () => (createStore) => (reducer, initialState, enhancer) => {
    const store = createStore(
      persistReducer(persistConfig, reducer),
      initialState,
      enhancer,
    );
    const persist = persistStore(store);
    return { ...store, persist };
  };

export const dva = {
  config: {
    onError: () => console.log('dva'),
    extraEnhancers: [persistEnhancer()],
    onReducer: (reducer) => {
      return persistReducer(persistConfig, reducer);
    },
  },
};

export const qiankun = {
  // 应用加载之前
  async bootstrap(props) {
    console.log('app2 bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props) {
    console.log('app2 mount', props);
  },
  // 应用卸载之后触发
  async unmount(props) {
    console.log('app2 unmount', props);
  },
};
