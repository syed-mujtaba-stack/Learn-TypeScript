// Day 21 Solution: Utility Types

type SolProfile = { id: string; name: string; bio: string };
type SolProfilePreview = Pick<SolProfile, 'id' | 'name'>;
type SolProfileWithoutBio = Omit<SolProfile, 'bio'>;

let solPreview: SolProfilePreview = { id: '1', name: 'Ali' };
let solNoBio: SolProfileWithoutBio = { id: '2', name: 'Sara' };
