import { User } from "@auth0/auth0-react";

// Radix UI Primitives
import * as AvatarRadix from "@radix-ui/react-avatar";

interface Props {
    user: User;
}

export const Avatar = ({ user} : Props) => {
  return (
    <div>
      <AvatarRadix.Root className="inline-flex mr-1 h-9 w-9 select-none items-center justify-center overflow-hidden rounded-full align-middle">
        <AvatarRadix.Image
          className="h-full w-full rounded-[inherit] object-cover"
          src={user?.picture}
          alt={user?.name}
        />
        <AvatarRadix.Fallback
          className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
          delayMs={600}
        >
          {user.given_name ? user?.given_name[0] : ""}
        </AvatarRadix.Fallback>
      </AvatarRadix.Root>
    </div>
  );
};
