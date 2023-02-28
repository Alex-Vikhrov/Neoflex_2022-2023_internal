import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//useAppSelector - нужен для того чтобы каждый раз в компоненте не указывать тип состояния при объявленнии useSelector(state: тиип => )