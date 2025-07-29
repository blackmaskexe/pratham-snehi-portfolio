import Device from "react-device-frame";

export default function MacbookFrame({ children }: { children: any }) {
  return (
    <Device name="macbook-pro">
      {/* Replace with your content: screenshot, live component, etc. */}
      {...children}
    </Device>
  );
}
