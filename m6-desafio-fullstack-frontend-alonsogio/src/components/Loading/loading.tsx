import {
  DivloadingBc,
  IconDiv,
  LoadingContentDiv,
  LoadingIcon
} from "./StyleLoading";

interface ILoadProps {
  loading: boolean;
}
export const Loading = ({ loading }: ILoadProps) => {
  return (
    <>
      {loading && (
        <DivloadingBc>
          <LoadingContentDiv>
            <IconDiv>{<LoadingIcon />}</IconDiv>
          </LoadingContentDiv>
        </DivloadingBc>
      )}
    </>
  );
};
