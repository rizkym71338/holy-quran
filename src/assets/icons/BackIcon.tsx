import { Path, Svg, SvgProps } from 'react-native-svg'

export const BackIcon = (props: SvgProps) => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M22 12C22 11.3557 21.4777 10.8333 20.8333 10.8333H5.46833L8.82422 7.46807C9.27771 7.01332 9.2772 6.2772 8.82307 5.82307V5.82307C8.3685 5.3685 7.6315 5.3685 7.17693 5.82307L1.70711 11.2929C1.31658 11.6834 1.31658 12.3166 1.70711 12.7071L7.17693 18.1769C7.6315 18.6315 8.3685 18.6315 8.82307 18.1769V18.1769C9.2772 17.7228 9.27771 16.9867 8.82422 16.5319L5.46833 13.1667H20.8333C21.4777 13.1667 22 12.6443 22 12V12Z"
        fill="currentColor"
      />
    </Svg>
  )
}