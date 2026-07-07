export const avatars = [
    { id: 1, src: "https://api.dicebear.com/10.x/bottts-neutral/svg?seed=jv0irevj" },
    { id: 2, src: "https://api.dicebear.com/10.x/bottts-neutral/svg?seed=q0yqwazf" },
    { id: 3, src: "https://api.dicebear.com/10.x/bottts-neutral/svg?seed=iin5u48x" },
    { id: 4, src: "https://api.dicebear.com/10.x/bottts-neutral/svg?seed=7qu4jebn" },
    { id: 5, src: "https://api.dicebear.com/10.x/bottts-neutral/svg?seed=fka0g4c7" },
    { id: 6, src: "https://api.dicebear.com/10.x/bottts-neutral/svg?seed=6rmxbcae" },
    { id: 7, src: "https://api.dicebear.com/10.x/bottts-neutral/svg?seed=187vw4ee" },
    { id: 8, src: "https://api.dicebear.com/10.x/bottts-neutral/svg?seed=hhovkjna" },
    { id: 9, src: "https://api.dicebear.com/10.x/bottts-neutral/svg?seed=p0kdd85y" },
    { id: 10, src: "https://api.dicebear.com/10.x/bottts-neutral/svg?seed=0xg2zdg9" },
];

export function getAvatarById(id) {
    const avatar = avatars.find(avatar => avatar.id === id);
    return avatar ? avatar.src : null;
}